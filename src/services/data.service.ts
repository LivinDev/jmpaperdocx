import type {   ProjectData } from "@/config/data.interface";
import ProjectJsonData from "@/data/project.json";

export const getLandingData = async (): Promise<ProjectData> => {
  const data: ProjectData = ProjectJsonData;
  return data;
};
