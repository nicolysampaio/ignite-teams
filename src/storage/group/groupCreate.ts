import AsyncStorage from "@react-native-async-storage/async-storage";

import { groupsGetAll } from "./groupsGetAll";

import { GROUP_COLLECTION } from "@storage/storageConfig";

import { AppError } from "@utils/AppError";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();

    const groupAlreadyExists = storedGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError("Já existe uma turma cadastrada com esse nome.");
    }

    const groups = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, groups);
  } catch (error) {
    throw error;
  }
}
