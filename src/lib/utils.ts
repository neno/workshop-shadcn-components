import { ProcessingInfoDataRaw } from "@/types/processinginfo.types";
import { DEFAULT_CURRENT_LOCALE } from "@/constants";
import { DEFAULT_CURRENT_LANG } from "@/constants";
import { ProcessingInfoData } from "@/types/processinginfo.types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentLang() {
  return DEFAULT_CURRENT_LANG;
}

export function getCurrentLocale() {
  return DEFAULT_CURRENT_LOCALE;
}

export function getDate(date: string, locale: string) {
  return new Date(date).toLocaleDateString(locale ?? DEFAULT_CURRENT_LOCALE, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function getTime(date: string, locale: string) {
  return new Date(date).toLocaleTimeString(locale ?? DEFAULT_CURRENT_LOCALE, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function mapProcessingInfoData(data: ProcessingInfoDataRaw) {
  const processingInfoData: ProcessingInfoData = data.reduce((acc, curr) => {
    const transmissionReference = curr.transmissionReference;
    const documentReference =
      curr[`documentDefinitionName${DEFAULT_CURRENT_LANG}`];
    const productName = curr[`productName${DEFAULT_CURRENT_LANG}`];
    const createdDate = getDate(curr.createdDate, DEFAULT_CURRENT_LOCALE);
    const createdTime = getTime(curr.createdDate, DEFAULT_CURRENT_LOCALE);
    const type = curr.type;

    for (const item of curr.items) {
      const status = item.status;
      acc.push({
        transmissionReference,
        documentReference,
        productName,
        createdDate,
        createdTime,
        type,
        status,
        documentDefinitionName: "",
      });
    }

    return acc;
  }, [] as ProcessingInfoData);

  return processingInfoData;
}
