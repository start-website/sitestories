import { storage } from '../../use_cases/storage'

export function saveViewStoriesGroup(storiesId, groupId) {
    storage.setGroupData(storiesId, groupId, 'viewed', true)
}