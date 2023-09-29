import crypto from "crypto";

interface OrderBodyType {
  merchantAccount: string;
  merchantDomainName: string;
  orderReference: string;
  orderDate: number;
  amount: string;
  currency: "UAH";
  productName: [string];
  productCount: [string];
  productPrice: [string];
}

const sendToWFPay = async (
  orderBody: OrderBodyType,
  defaultPaymentSystem: string,
  signature: string,
) => {
  try {
    // const res = await axios.post("https://secure.wayforpay.com/pay", {
    //   transactionType: "CREATE_INVOICE",
    //   ...orderBody,
    //   apiVersion: 1,
    //   defaultPaymentSystem,
    //   signature,
    // });
    // console.log(signatureRaw)
    console.log(JSON.stringify({
      transactionType: "CREATE_INVOICE",
      ...orderBody,
      apiVersion: 1,
      defaultPaymentSystem,
      signature,
    }))
    // await console.log(res);
  } catch (error) {
    throw error;
  }
};

const sendPayment = (amount: number, defaultPaymentSystem: string) => {

  const merchantSecretKey = "flk3409refn54t54t*FNJRET";

  const orderBody: OrderBodyType = {
    merchantAccount: "test_merch_n1",
    merchantDomainName: "remote-demining-kappa.vercel.app",
    orderReference: Date.now().toString(),
    orderDate: Date.now(),
    amount: `${amount}`,
    currency: "UAH",
    productName: ["Remote Demining Support"],
    productCount: ["1"],
    productPrice: [`${amount}`],
  };

  const signatureRaw = Buffer.from(
    Object.values(orderBody).join(";"),
    "utf-8"
  ).toString();
  const signature = crypto
    .createHmac("md5", merchantSecretKey)
    .update(signatureRaw)
    .digest("hex");

  sendToWFPay(orderBody, defaultPaymentSystem, signature);
};

export { sendPayment };
