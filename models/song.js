import Model from './model';
import Artist from './artist';

export default class Song extends Model {
    resource() {
        return 'songs';
    }

    artists() {
        return this.hasMany(Artist);
    }

    static async fetchByID(id) {
        const response = await this.$http.get(`songs/${id}`);
        return response;
    }
}
