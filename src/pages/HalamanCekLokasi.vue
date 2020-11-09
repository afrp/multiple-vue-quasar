<template>
  <div>
    <q-header class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn label="Check In" icon="arrow_back" @click.stop="$router.go(-1)"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header> 
    <q-page padding class="q-pt-lg">
      <div class="q-pt-xl">
        
        <q-card bordered class="cardtp text-center shadow-2">
          
        <span style="font-weight: bold;">Foto Pekerjaan</span><br/>
      
          <div class="row q-mt-md q-mb-md">
            <div class="col-3">
              <q-btn round  color="grey-8" size="17px">
              <q-icon name="camera_alt" size="17px"/>
              <span class="cam-tombol">Start</span></q-btn>
            </div>
            <div class="col-3">
              <q-btn round  color="grey-8" size="17px">
                <q-icon name="camera_alt" size="17px"/>
                <span class="cam-tombol">Work</span>
                </q-btn>
            </div>

            <div class="col-3">
              <q-btn round  color="grey-8" size="17px" >                
                <span class="cam-tombol">problem</span>                    
                </q-btn>
            </div>
            <div class="col-3 ">
              <q-btn round  color="grey-8" size="17px">
                <q-icon name="camera_alt" size="17px"/>
                <span class="cam-tombol">Finish</span></q-btn>
            </div>
          </div>    
        </q-card>
        <q-card bordered class="cardtp text-center shadow-2">
          <div class="col col-md-8">            
          <q-avatar square size="150px"  font-size="82px"  text-color="black"> 
            <q-icon name="camera_alt" color="grey-8" size="170px"/> 
            
          </q-avatar>
          </div>
        </q-card>
        <q-card bordered class="cardtp text-center shadow-2">
            <div class="col col-md-8">    
            <q-input color="grey-3" filled v-model="text1" label="Konsumen"  outlined dense readonly/> <br/>
            <q-input color="grey-3" filled v-model="text2" label="Jenis Pekerjaan"  outlined dense readonly/> <br/>
            <q-input color="grey-3" filled v-model="text4" label="Detail Pekerjaan" type="textarea" outlined dense />         
    
            </div>
        </q-card>
      </div>
      <q-footer>
          <div class="q-gutter-sm" style="text-align:center;">
            <q-btn color="green" @click="showNotif" class="full-width" label="Finish Job" to="/halamanapp" />
          </div>
          </q-footer>
    </q-page>
  </div>
</template>


<script>
export default {
  data () {
    return {
      text1: 'Teguh smu',
      text2: 'Pasang Baru',
      text4: 'Pemasangan sempurnaaa'
    }
  },
  methods: {
    showNotif () {
      this.$q.notify({
        message: 'Job telah selesai',
        color: 'green',
        position: 'top'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.cam-tombol{
  display: block; 
  color: white;
  font-size: 8px;
  
}
</style>
    


