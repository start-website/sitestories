export const LStorage = {
    name: 'sitestories',

    setData(data) {
        localStorage.setItem(this.name, JSON.stringify(data))
    },

    getData() {
        let storage_data = JSON.parse(localStorage.getItem(this.name))
        
        if (!storage_data) {
            storage_data = {
                'stories': {},
            }
        }

        return storage_data
    },

    setGroupData(stories_id, group_id, prop, group_data) {
        const storage_data = this.getData()

        if (!storage_data['stories']) storage_data['stories'] = {}
        if (!storage_data['stories'][stories_id]) storage_data['stories'][stories_id] = {}
        if (!storage_data['stories'][stories_id]['groups']) storage_data['stories'][stories_id]['groups'] = {}
        if (!storage_data['stories'][stories_id]['groups'][group_id]) storage_data['stories'][stories_id]['groups'][group_id] = {}

        storage_data['stories'][stories_id]['groups'][group_id][prop] = group_data

        this.setData(storage_data)
    },

    getGroupData(stories_id, group_id, prop) {
        const storage_data = this.getData()

        if (!storage_data['stories']) storage_data['stories'] = {}
        if (!storage_data['stories'][stories_id]) storage_data['stories'][stories_id] = {}
        if (!storage_data['stories'][stories_id]['groups']) storage_data['stories'][stories_id]['groups'] = {}
        if (!storage_data['stories'][stories_id]['groups'][group_id]) storage_data['stories'][stories_id]['groups'][group_id] = {}
        if (!storage_data['stories'][stories_id]['groups'][group_id][prop]) storage_data['stories'][stories_id]['groups'][group_id][prop] = null
        
        return storage_data['stories'][stories_id]['groups'][group_id][prop]
    }
}