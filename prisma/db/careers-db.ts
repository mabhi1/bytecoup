import { NewCareersDbType } from "@/lib/types/careers-types";
import prisma from "../prisma";

export async function createCareer(career: NewCareersDbType) {
  try {
    const createdCareer = await prisma.career.create({ data: career });
    return { data: createdCareer, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error };
  }
}
