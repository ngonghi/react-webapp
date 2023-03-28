import BaseRepository from "./BaseRepository"

class AdminUserRepository extends BaseRepository {
    signIn(email, password) {
        return this.post('/api/admin/auth/signin', {
            email: email,
            password: password,
        })
    }
}

export default AdminUserRepository
