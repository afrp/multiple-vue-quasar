<template>
  <div>
    <q-header class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title class="text-left">
          <q-img src="statics/logo.png" class="logo-gpsku" />
        </q-toolbar-title>
        <q-btn round icon="fas fa-history" to="/history"></q-btn>
        <q-btn round  >
          <q-icon name="far fa-bell"><q-badge color="red" floating>2</q-badge></q-icon>
            <q-menu
            transition-show="jump-down"
            transition-hide="jump-up"
            anchor="center middle" self="top right"
            auto-close
            >
              <q-list style="min-width: 100px">
                <q-item clickable to="/checkin">
                  <q-item-section top>
                    <q-item-label>Besok, Pasang Baru</q-item-label>
                    <q-item-label caption lines="1">Rabu, 18/12/2019 13:30</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator ></q-separator>
                <q-item clickable>
                  <q-item-section top>
                    <q-item-label>Ada jadwal Baru nih</q-item-label>
                    <q-item-label caption lines="1">Jum'at, 20/12/2019 13:30</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page padding class="q-pt-xl">
      <div class="q-pt-xl">
        <q-card flat class="cardtp text-center shadow-5">
          <div class="row q-mt-md q-mb-md">
            <div class="col-6">
              <q-btn round icon="fas fa-play-circle" color="orange-8" size="25px" to="/checkin" ></q-btn>
              <span class="nama-tombol" >Checkin</span>
            </div>
            <div class="col-6">
              <q-btn round icon="fas fa-id-badge" color="orange-8" size="25px" to="/profil" ></q-btn>
              <span class="nama-tombol" >Profile</span>
            </div>

            <div class="col-6 q-pt-lg">
              <q-btn round icon="fas fa-power-off" color="orange-8" size="25px" to="" ></q-btn>
              <span class="nama-tombol" >Logout</span>
            </div>
            <div class="col-6 q-pt-lg">
              <q-btn round icon="fas fa-info-circle" color="orange-8" size="25px" to="" ></q-btn>
              <span class="nama-tombol" >Help</span>
            </div>
          </div>
        </q-card>
      </div>

      <div class="q-pt-xl">
        <q-card bordered class="cardtp text-center shadow-5">
        <b><center>Jadwal Baru </center></b>
        <q-table
          :data="data"
          :columns="columns"
          row-key="name"
          :pagination.sync="pagination"
          :rows-per-page-options="[0]"
          binary-state-sort
          :hide-bottom="data.length > 0"
          @row-click="onRowClick"
        />
        </q-card>
      </div>
    </q-page>
  </div>
</template>


<script>
export default {
  data() {
    return {
      pagination: {

         rowsPerPage: 0
      },
      columns: [
        { name: "waktu",
        label: "Waktu",
        field: "waktu",
        align: "center" },

        { name: "kota",
        label: "Kota",
        field: "kota",
        align: "center" },

        {
          name: "pekerjaan",
          required: true,
          label: "Pekerjaan",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        }
      ],
      data: [
        {
          waktu: "2019/12/15 11:00",
          kota: "Bekasi",
          name: "Pasang Baru"
        },
        {
          waktu: "2019/12/14 13:30",
          kota: "Tegal",
          name: "Maintenance"
        }
      ]
    };
  },
  methods: {
    onRowClick (evt, row) {
      console.log('clicked on', evt, row),
       this.$router.push('/lihatjadwal')
    }
  }
};
</script>

<style lang="scss" scoped>
.logo-gpsku {
  width: 150px;
}
.logo-gpskuatas {
  text-align: left;
}
.nama-tombol{
  display: block;
  color: black;
  font-weight: bold;
}
</style>
