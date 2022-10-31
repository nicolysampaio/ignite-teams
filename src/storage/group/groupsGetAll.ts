import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupsGetAll() {
  try {
    const stored = await AsyncStorage.getItem(GROUP_COLLECTION);

    const groups: string[] = stored ? JSON.parse(stored) : [];

    return groups;
  } catch (error) {
    throw error;
  }
}
