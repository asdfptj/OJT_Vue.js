<template>
    <div>
        <h3>A01 Axios</h3>

        <div>
            <button @click="getContactList">Get ContactList</button>
            <button @click="getContactListAsync">Get ContactList Async</button>
            <button @click="getContact">Get Contact</button>
            <button @click="addContact">Add Contact</button>
            <button @click="updateContact">Update Contact</button>
            <button @click="deleteContact">Delete Contact</button>
        </div>

        <div>
            <textarea cols="100" rows="10" readonly :value="data"></textarea>
        </div>
    </div>
</template>

<script>
// 외부 라이브러리 import
import axios from 'axios'
export default {
    data: function () {
        return {
            data: {

            }
        }
    },
    methods: {
        getContactList: function () {
            // GET => 서버로부터 데이터를 사져오는 경우 사용.
            // 브라우저에서 주소줄에 주소를 입력해서 요청하는 것은 모두 GET요청이다

            axios.get('http://localhost:8085/contacts', {params: {pageno:1, pagesize:4}})
                .then(res => {
                    console.log(res.data)
                    // Javascript Object => String 문자열로 변환.
                    // data.contacts(X) => 문자로 변환 후에는 .을 이용한 참조가 안된다.
                    this.data = JSON.stringify(res.data.contacts, null, 4)
                })
                .catch(error => console.log(error))
        },

        getContactListAsync: async function () {
            try{
                const res = await axios({
                method: "get",
                url: 'http://localhost:8085/contacts',
                params: { pageno: 1, pagesize: 2 }
            })
                this.data = JSON.stringify(res.data, null, 4)
                console.log('이 문구는 위의 조회가 완료되야 표시된다.');
            }catch(error){
                console.error(error);
            }
        },
        getContact: function () {
            axios.get('http://localhost:8085/contacts/' + 100)
                .then(res => this.data = JSON.stringify(res.data, null, 4))
                .catch(error => console.log(error))
        },
        addContact: function () {
            const data = {
                "name": "강감찬",
                "tel": "010-2222-3339",
                "address": "서울시"
            }
            // POST => 클라이언트에서 서버에 값을 전달하여 추가하고자 하는 경우.
            axios({
                method: 'post',
                url: 'http://localhost:8085/contacts',
                data
            })
                .then(res => this.data = JSON.stringify(res.data, null, 4))
                .catch(error => console.log(error))
        },
        updateContact: function () {
            const data = {
                "name": "이순시",
                "tel": "010-2222-3339",
                "address": "부산시"
            }
            // put => 클라이언트에서 서버에 값을 전달하여 기존값을 수정하고자 하는 경우
            axios({
                method: 'put',
                url: 'http://localhost:8085/contacts' + 1653288113934,
                data
            })
                .then(res => this.data = JSON.stringify(res.data, null, 4))
                .catch(error => console.log(error))
        },
        deleteContact: function () {
        axios({
            method: 'delete',
            url: 'http://localhost:8085/contacts',
        })
            .then(res => this.data = JSON.stringify(res.data, null, 4))
            .catch(error => console.log(error))
        },
    }
}
</script>