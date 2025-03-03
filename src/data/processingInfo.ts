type pInfo = {
  transmissionReference: string; // Geschäftsfall
  documentReference: string; // Dokumentenreferenz
  documentDefinitionName: string; // Dokument
  productName: string; // Produkt
  createdDate: string; // Erstellungsdatum
  createdTime: string; // Erstellungszeit
  type: string; // Ein-/Ausgang
  status: string; // Status
};

interface ProcessingInfo {
  transmissionId: number;
  correlationReference: string;
  transmissionReference: string;
  documentReference: string;
  mimeType: string;
  documentDefinitionNameDe: string;
  documentDefinitionNameFr: string;
  documentDefinitionNameIt: string;
  technicalProductName: string;
  productNameDe: string;
  productNameFr: string;
  productNameIt: string;
  senderId: number;
  senderDisplayName: string;
  fileSize: number;
  mode: string;
  createdDate: string;
  items: ProcessingInfoItem[];
  status: string;
  type: string;
}

interface ProcessingInfoItem {
  id: number;
  receiverId: number;
  receiverDisplayName: string;
  fetchedDate: string | null;
  status: string;
  deliveryMode: string;
  participantType: string;
  collectDate: string | null;
}

const processingInfoData: ProcessingInfo[] = [
  {
    transmissionId: 1003065699,
    correlationReference: "review_tp_kuh12",
    transmissionReference: "34495ac7-ea75-4989-bc67-de112c7b9c26",
    documentReference: "review_tp_kuh12",
    mimeType: "application/x-fd-geninv-resp-v45+xml",
    documentDefinitionNameDe: "Generelle Rechnungsantwort 4.5",
    documentDefinitionNameFr: "Réponse à la facture standard 4.5",
    documentDefinitionNameIt: "Risposta a la fattura generica 4.5",
    technicalProductName: "ELA",
    productNameDe: "Leistungsabrechnung",
    productNameFr: "Décompte des prestations",
    productNameIt: "Fatturazione delle prestazioni",
    senderId: 64,
    senderDisplayName: "Versicherung mit Antwortsimulator",
    fileSize: 1963,
    mode: "PRODUCTION",
    createdDate: "2025-02-24T20:11:44.669",
    items: [
      {
        id: 1009815317,
        receiverId: 16,
        receiverDisplayName: "Org2012 DE",
        fetchedDate: null,
        status: "PROCESSING",
        deliveryMode: "ELECTRONIC",
        participantType: "MAIN_RECEIVER",
        collectDate: null,
      },
    ],
    status: "PROCESSING",
    type: "RECEIVE",
  },
  {
    transmissionId: 1003065698,
    correlationReference: "review_tp_kuh12",
    transmissionReference: "a3270563-15f2-46a6-a8a4-ee09303ef481",
    documentReference: "review_tp_kuh12",
    mimeType: "application/x-fd-geninv-req-v45+xml",
    documentDefinitionNameDe: "Generelle Rechnung 4.5",
    documentDefinitionNameFr: "Facture standard 4.5",
    documentDefinitionNameIt: "Fattura generica 4.5",
    technicalProductName: "ELA",
    productNameDe: "Leistungsabrechnung",
    productNameFr: "Décompte des prestations",
    productNameIt: "Fatturazione delle prestazioni",
    senderId: 16,
    senderDisplayName: "Org2012 DE",
    fileSize: 8650,
    mode: "PRODUCTION",
    createdDate: "2025-02-24T20:11:42.8",
    items: [
      {
        id: 1009815314,
        receiverId: 64,
        receiverDisplayName: "Versicherung mit Antwortsimulator",
        fetchedDate: "2025-02-24T20:11:44.703",
        status: "DONE",
        deliveryMode: "ELECTRONIC",
        participantType: "MAIN_RECEIVER",
        collectDate: null,
      },
      {
        id: 1009815315,
        receiverId: 103,
        receiverDisplayName: "Patientenportal",
        fetchedDate: "2025-02-24T20:11:43.33",
        status: "DONE",
        deliveryMode: "ELECTRONIC",
        participantType: "PATIENT",
        collectDate: null,
      },
    ],
    status: "DONE",
    type: "SEND",
  },
  {
    transmissionId: 1003065404,
    correlationReference: "review_tp_kuh11",
    transmissionReference: "4c1c4600-877e-4761-a60e-ee5d86026929",
    documentReference: "review_tp_kuh11",
    mimeType: "application/x-fd-geninv-resp-v45+xml",
    documentDefinitionNameDe: "Generelle Rechnungsantwort 4.5",
    documentDefinitionNameFr: "Réponse à la facture standard 4.5",
    documentDefinitionNameIt: "Risposta a la fattura generica 4.5",
    technicalProductName: "ELA",
    productNameDe: "Leistungsabrechnung",
    productNameFr: "Décompte des prestations",
    productNameIt: "Fatturazione delle prestazioni",
    senderId: 64,
    senderDisplayName: "Versicherung mit Antwortsimulator",
    fileSize: 1963,
    mode: "PRODUCTION",
    createdDate: "2025-02-24T18:40:05.207",
    items: [
      {
        id: 1009814725,
        receiverId: 16,
        receiverDisplayName: "Org2012 DE",
        fetchedDate: null,
        status: "PROCESSING",
        deliveryMode: "ELECTRONIC",
        participantType: "MAIN_RECEIVER",
        collectDate: null,
      },
    ],
    status: "PROCESSING",
    type: "RECEIVE",
  },
  {
    transmissionId: 1003065403,
    correlationReference: "review_tp_kuh11",
    transmissionReference: "28463356-2fca-47db-8360-3f1cb06e5ce9",
    documentReference: "review_tp_kuh11",
    mimeType: "application/x-fd-geninv-req-v45+xml",
    documentDefinitionNameDe: "Generelle Rechnung 4.5",
    documentDefinitionNameFr: "Facture standard 4.5",
    documentDefinitionNameIt: "Fattura generica 4.5",
    technicalProductName: "ELA",
    productNameDe: "Leistungsabrechnung",
    productNameFr: "Décompte des prestations",
    productNameIt: "Fatturazione delle prestazioni",
    senderId: 16,
    senderDisplayName: "Org2012 DE",
    fileSize: 8650,
    mode: "PRODUCTION",
    createdDate: "2025-02-24T18:40:02.575",
    items: [
      {
        id: 1009814722,
        receiverId: 64,
        receiverDisplayName: "Versicherung mit Antwortsimulator",
        fetchedDate: "2025-02-24T18:40:05.232",
        status: "DONE",
        deliveryMode: "ELECTRONIC",
        participantType: "MAIN_RECEIVER",
        collectDate: null,
      },
      {
        id: 1009814723,
        receiverId: 103,
        receiverDisplayName: "Patientenportal",
        fetchedDate: "2025-02-24T18:40:03.868",
        status: "DONE",
        deliveryMode: "ELECTRONIC",
        participantType: "PATIENT",
        collectDate: null,
      },
    ],
    status: "DONE",
    type: "SEND",
  },
];

const CURRENT_LANG = "De" as const;
const CURRENT_LOCALE = "de-DE" as const;

export function getDate(date: string, locale: string) {
  return new Date(date).toLocaleDateString(locale ?? "de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function getTime(date: string, locale: string) {
  return new Date(date).toLocaleTimeString(locale ?? "de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

const pInfoData: pInfo[] = processingInfoData.reduce((acc, curr) => {
  const transmissionReference = curr.transmissionReference;
  const documentReference = curr[`documentDefinitionName${CURRENT_LANG}`];
  const productName = curr[`productName${CURRENT_LANG}`];
  const createdDate = getDate(curr.createdDate, CURRENT_LOCALE);
  const createdTime = getTime(curr.createdDate, CURRENT_LOCALE);
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
}, [] as pInfo[]);

console.log(pInfoData);
