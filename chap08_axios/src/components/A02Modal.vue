<template>
  <div>
    <table class="table">
      <thead>
        <tr><th>No</th><th>Name</th><th>Tel</th><th>Address</th><th>Photo</th></tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="contact in contactList.contacts" :key="contact.no"></td>
          <td>{{contact.no}}</td>
          <td><a href="#">{{contact.name}}</a></td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>
          <td><img src="contact.photo" alt="증명사진" width="50px"></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary"   @click="viewAdd">ADD</button>

    <!-- Get Contact Modal -->
    <div class="modal fade" id="getContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Get Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              Name: <input type="text" class="form-control" disabled />
              Tel: <input type="text" class="form-control" disabled />
              Address: <input type="text" class="form-control" disabled />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Delete</button>
            <button type="button" class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Update Contact Modal -->
    <div class="modal fade" id="updateContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Update Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              Name: <input type="text" class="form-control" />
              Tel: <input type="text" class="form-control" />
              Address: <input type="text" class="form-control" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" >Update</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Contact Modal -->
    <div class="modal fade" id="addContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Name: <input type="text" class="form-control"/>
            Tel: <input type="text" class="form-control"/>
            Address: <input type="text" class="form-control"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>

<div v-show="contactList.isLoading">Loading...</div>
  </div>
</template>
<script>
import * as bootstrap from 'bootstrap/dist/js/bootstrap.esm.js'
import { onMounted, reactive} from 'vue';
import axios from 'axios';
import contactlist from '../../../sample/chap09_router/src/view/data/ContactList';

export default {

  // data(){}
  setup() {
    let getContentModal = '';
    let updateContentModal = '';
    let addContentModal = '';
    const contactList = reactive ({
      isLoading: false,
      contacts: []
    })

    const baseURL = 'http://localhost:8085/contacts/';

    // mounted() {}

    onMounted(()=>{
      getContentModal = new bootstrap.Modal(document.getElementById('getContent'), {
        keyboard: false
      });
      updateContentModal = new bootstrap.Modal(document.getElementById('updateContent'), {
        keyboard: false
      });
      addContentModal = new bootstrap.Modal(document.getElementById('addContent'), {
        keyboard: false
      });

      // 시작하자마자 데이터 가져오기
      getContactList();
    });


    // method{}
    const viewUpdate = () => {
      getContentModal.hide()
      updateContentModal.show();
    }
    const viewAdd = () => {
      addContentModal.show();
    }

    // 전체 리스트 수정
    const getContactList = () => {
      axios.get(baseURL, {params: {pageno:1, pagesize:10}})
      .then(resp => {
        contactlist.contacts = resp.data.contacts;
      })
      .catch(error => console.error(error));
    }

    return {viewUpdate, viewAdd, contactList}
  },
}
</script>
