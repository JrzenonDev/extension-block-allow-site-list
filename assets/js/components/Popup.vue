<template>
  <div class="wrapper">
    <h1 class="title">This is a popup!</h1>
    <div class="buttons">
      <button
        type="button"
        class="state-off"
        @click="setActive(false)"
      >
        off
      </button>
      <button
        type="button"
        class="state-on"
        @click="setActive(true)"
      >
        on
      </button>
    </div>

    <div class="sites">
      <p>List your websites bellow, one per line</p>
      <textarea
        v-model="list"
        rows="8"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
      ></textarea>
    </div>

    <button
      type="button"
      class="state-save"
      @click="saveList"
    >
      Save Site List
    </button>

  </div>
</template>

<script>

export default {
  name: 'Popup',
  data() {
    return {
      active: true,
      list: 'example.com'
    }
  },
  created() {
    chrome.storage.sync.get(['toggleSitesActive', 'toggleSitesList'], (result) => {
      this.active = result.toggleSitesActive
      this.list = result.toggleSitesList
    })
  },
  methods: {
    setActive(active) {
      this.active = active
      chrome.storage.sync.set({
        toggleSitesActive: active
      }, () => {})
    },
    saveList() {
      chrome.storage.sync.set({
        toggleSitesList: this.list
      }, () => {})
    }
  }
}

</script>
