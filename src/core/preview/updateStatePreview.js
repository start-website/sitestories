import { storage } from '../../use_cases/storage'

export function updateStatePreview(preview, storiesId, groupId) {
    const isViewedGroup = storage.getGroupData(storiesId, groupId, 'viewed')
    
    if (isViewedGroup) {
        preview.classList.add('sitestories__preview_viewed')
    }
}