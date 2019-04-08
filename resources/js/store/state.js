let state = {
    users: [],
    currentUser: null,
    token: localStorage.getItem('accessToken') || null,
    albums: [],
    success: null,
    error: null
}

export default state
