<template>
  <div>
    <q-header class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn label="Detail Jadwal" icon="arrow_back" @click.stop="$router.go(-1)"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page padding>
      <div class="kartuprofil">
        <q-card bordered flat>
          <div class="q-ma-md">
            <q-list>
              <q-item>
                <q-item-section>Jenis Kerjaan</q-item-section>
                <q-item-section>
                  <q-input outlined v-model="jenkes" dense readonly />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Hari</q-item-section>
                <q-item-section>
                  <q-input outlined v-model="hari" readonly dense />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Tanggal</q-item-section>
                <q-item-section>
                  <q-input dense outlined v-model="date" readonly mask="date">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="qDateProxy"
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Waktu Pemasangan</q-item-section>
                <q-item-section>
                  <q-input dense outlined v-model="time" mask="time" readonly>
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy transition-show="scale" transition-hide="scale">
                          <q-time v-model="time" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Nama Konsumen</q-item-section>
                <q-item-section>
                  <q-input outlined v-model="konsumen" dense readonly/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Cabang</q-item-section>
                <q-item-section>
                  <q-input outlined v-model="cabang" dense readonly/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Alamat Konsumen</q-item-section>
                <q-item-section>
                  <q-input dense v-model="alamat" outlined type="textarea" readonly />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Merek Kendaraan/Nopol</q-item-section>
                <q-item-section>
                  <q-input outlined v-model="merk" dense readonly />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Tipe GPS</q-item-section>
                <q-item-section>
                  <q-input outlined v-model="gps" dense readonly/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Rescedule</q-item-section>
                <q-item-section>
                  <q-input outlined v-model="rescedule" dense readonly />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Sharelock</q-item-section>
                <q-item-section>
                  <q-input outlined v-model="sharelock" dense readonly/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Keterangan</q-item-section>
                <q-item-section>
                  <q-input dense v-model="keterangan" outlined type="textarea" readonly />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <q-footer>
          <div class="q-gutter-sm" style="text-align:center;">
            <q-btn color="green" @click="showNotif" class="full-width" label="Ambil" to="/checkin" />
          </div>
          </q-footer>
        </q-card>
      </div>
    </q-page>
  </div>
</template>


<script>
export default {
  data() {
    return {
      jenkes: "Pasang Baru",
      hari: "Rabu",
      konsumen:"Teguh",
      cabang: "cirebon",
      alamat: "Arumsari",
      merk: "Suzuki Baleno",
      gps: "ID303",
      keterangan: "Bingung aku tuh",
      rescedule: "Tidak",
      date: "2019/02/01",
      time: "10:56",
      sharelock: "maps.google"
    };
  },
  methods: {
    showNotif () {
      this.$q.notify({
        message: 'Jadwal Berhasil diambil oleh anda',
        color: 'green',
        position: 'top'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.kartuprofil {
  padding-top: 20%;
}
</style>


    


