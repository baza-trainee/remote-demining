import crypto from "crypto";
import axios from "axios";

interface OrderBodyType {
  merchantAccount: string;
  merchantDomainName: string;
  orderReference: string;
  orderDate: string;
  amount: string;
  currency: "UAH";
  productName: string;
  productCount: string;
  productPrice: string;
}

const sendToWFPay = async (orderBody: OrderBodyType, defaultPaymentSystem: string, signature: string) => {
  try {
    const res = await axios.post("https://secure.wayforpay.com/pay", {
      request: { ...orderBody, defaultPaymentSystem, signature },
    });
    await console.log(res);
  } catch (error) {
    throw (error);
  }
};

const sendPayment = (amount: number, defaultPaymentSystem: string) => {
  const merchantSecretKey = "flk3409refn54t54t*FNJRET";

  const orderBody: OrderBodyType = {
    merchantAccount: "test_merch_n1",
    merchantDomainName: "remote-demining.vercel.app",
    orderReference: Date.now().toString(),
    orderDate: Date.now().toString(),
    amount: `${amount}`,
    currency: "UAH",
    productName: "Remote Demining Support",
    productCount: "1",
    productPrice: `${amount}`,
  };

  const signatureRaw = Buffer.from(
    Object.values(orderBody).join(";"),
    "utf-8"
  ).toString();
  const signature = crypto
    .createHmac("md5", signatureRaw)
    .update(merchantSecretKey)
    .digest("hex");

  sendToWFPay(orderBody, defaultPaymentSystem, signature);
};

export { sendPayment };
