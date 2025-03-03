export interface ProcessingInfoRaw {
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
  items: ProcessingInfoItemRaw[];
  status: string;
  type: string;
}

export interface ProcessingInfoItemRaw {
  id: number;
  receiverId: number;
  receiverDisplayName: string;
  fetchedDate: string | null;
  status: string;
  deliveryMode: string;
  participantType: string | null;
  collectDate: string | null;
}

export type ProcessingInfoDataRaw = ProcessingInfoRaw[];

export type ProcessingInfoItem = {
  transmissionReference: string; // Geschäftsfall
  documentReference: string; // Dokumentenreferenz
  documentDefinitionName: string; // Dokument
  productName: string; // Produkt
  createdDate: string; // Erstellungsdatum
  createdTime: string; // Erstellungszeit
  type: string; // Ein-/Ausgang
  status: string; // Status
};

export type ProcessingInfoData = ProcessingInfoItem[];
