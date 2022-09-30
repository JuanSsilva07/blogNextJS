import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://vugjdtcpbjvqlhfwtbii.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1Z2pkdGNwYmp2cWxoZnd0YmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ0NjM3MTgsImV4cCI6MTk4MDAzOTcxOH0.hDHvK8Kvatuy0yYnA8mWqONPBV84ltgFVUW-iazbBxg",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1Z2pkdGNwYmp2cWxoZnd0YmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ0NjM3MTgsImV4cCI6MTk4MDAzOTcxOH0.hDHvK8Kvatuy0yYnA8mWqONPBV84ltgFVUW-iazbBxg"
    }
})