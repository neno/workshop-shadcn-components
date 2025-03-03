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

// TODO: use maybe day.js or date-fns
export function getFormattedDate(date: string, locale: string): string {
  return new Date(date).toLocaleDateString(locale ?? DEFAULT_CURRENT_LOCALE, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

// TODO: use maybe day.js or date-fns
export function getFormattedTime(date: string, locale: string): string {
  return new Date(date).toLocaleTimeString(locale ?? DEFAULT_CURRENT_LOCALE, {
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
  });
}

export function mapProcessingInfoData(data: ProcessingInfoDataRaw) {
  const processingInfoData: ProcessingInfoData = data.reduce((acc, curr) => {
    const transmissionReference = curr.transmissionReference;
    const documentReference =
      curr[`documentDefinitionName${DEFAULT_CURRENT_LANG}`];
    const documentDefinitionName =
      curr[`documentDefinitionName${DEFAULT_CURRENT_LANG}`];
    const productName = curr[`productName${DEFAULT_CURRENT_LANG}`];
    const createdDate = getFormattedDate(
      curr.createdDate,
      DEFAULT_CURRENT_LOCALE
    );
    const createdTime = getFormattedTime(
      curr.createdDate,
      DEFAULT_CURRENT_LOCALE
    );
    const type = curr.type;

    for (const item of curr.items) {
      const status = item.status;
      acc.push({
        transmissionReference,
        documentReference,
        documentDefinitionName,
        productName,
        createdDate,
        createdTime,
        type,
        status,
      });
    }

    return acc;
  }, [] as ProcessingInfoData);

  return processingInfoData;
}
