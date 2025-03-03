import { processingInfoDataRaw } from "@/data/transmissioninfos_data";
import { ProcessingInfoData } from "@/types/processinginfo.types";
import { mapProcessingInfoData } from "@/lib/utils";
import { ProcessingInfoTable } from "./processinginfo-table";

export function ProcessingInfo() {
  const processingInfoData: ProcessingInfoData = mapProcessingInfoData(
    processingInfoDataRaw
  );

  return <ProcessingInfoTable data={processingInfoData} />;
}
