export interface TechnicianPageDto {
  breadcrumb: { right: string; left: string };
  technician: { nameFa: string; nameEn: string; verifiedText: string; avatarUrl: string };
  stats: { questions: number; reviews: number; projects: number; rating: number; votes: number };
  primarySpecialty: { title: string; name: string; desc: string };
  otherSpecialtiesTitle: string;
  otherSpecialties: string[];
  serviceLocationsTitle: string;
  serviceLocations: Array<{ province: string; city: string }>;
  brandsTitle: string;
  brands: Array<{ name: string; logoUrl: string }>;
  reportTitle: string;
  profileTitle: string;
  profileSpecs: Array<{ label: string; value: string; isLink?: boolean; linkPrefix?: string }>;
  specialtiesTitle: string;
  specialties: Array<{ title: string; desc: string }>;
}




