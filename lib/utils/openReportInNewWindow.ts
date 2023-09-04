import { ReportsInDTO } from "../admin/content";

export const openReportInNewWindow = (report: ReportsInDTO) => {
  if (report) {
    // Convert base64 to a Blob
    const byteCharacters = atob(report.data.report);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/pdf" });

    // Create a URL for the Blob
    const blobUrl = URL.createObjectURL(blob);

    // Open a new window or tab with the URL
    window.open(blobUrl, "_blank");
  }
};
