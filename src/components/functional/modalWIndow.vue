<template>
  <transition name="modal" id="modal-template">
    <div class="modal-mask" @click.stop="closeModal">
      <div class="modal-wrapper" >
        <button class="modal-default-button" @click="closeModal" ></button>
        <div class="modal-container" @click.stop="none">
          <div class="modal-body" >
            <slot name="body">
            default body
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script >


export default {
    data () {
        return {

        }
    },
    methods: {
      closeModal() {
        return this.$emit('close')

      },
      none() {

      }
    }

}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;

}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  padding: 10px;
  margin: 0 auto;

}
.modal-container::-webkit-scrollbar {
  width: 0;
}
.modal-container {
  position: relative;
  min-width: 300px;
  max-width: 70%;
  margin: 0px auto;
  padding: 10px 30px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  
      overflow-y: unset;
      overflow-x: hidden;
      max-height: 97%;
      min-height: 80vh;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}


.modal-default-button {
  position: absolute;
  top:10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-image: url(../img/profile/icons/close-white.png) */
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.delete-window .modal-container {
  width: 350px;
  padding-bottom: 0;
  padding-top: 25px;
}

.incognito-modal .modal-container {
  width: 350px;
  padding-bottom: 0;
  padding-top: 25px;
}

.delete-menu .modal-container {
  width: 350px;
  padding-bottom: 0;
  padding-top: 25px;
}
.complain .modal-container {
  width: 350px;
  padding-bottom: 0;
}


</style>