<template>
  <div>
    <q-header class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn label=" List Check In" icon="arrow_back" @click.stop="$router.go(-1)"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>        
   <div class="q-pt-xl">
        <div class="q-pt-md">
      <q-list bordered>
        <q-item v-for="schedule in schedules" :key="schedule.id" class="q-my-sm" clickable v-ripple :to="schedule.url" exact>
          
        <q-item-section side >
          <q-badge color="teal" class="text-center">{{ schedule.hari }}<br/>{{ schedule.jam }}</q-badge>
        </q-item-section>
        
        <q-item-section top>
          <q-item-label>{{ schedule.name }}</q-item-label>
          <q-item-label caption lines="1">{{ schedule.tgl }}</q-item-label>
          <q-item-label caption lines="2">{{ schedule.krj }}</q-item-label>
        </q-item-section>
        <q-separator vertical inset />
        <q-item-section side>
          <q-icon name="keyboard_arrow_right" color="teal" />
        </q-item-section>
          
        </q-item>
        <q-separator spaced />
      </q-list>
        </div>
   </div>
       
    
  </div>
</template>


<script>
const schedules = [{
  id: 1,
  name: 'Teguh smu',
  krj: 'Maintenance',
  tgl: '2019/12/15',
  jam: '12:30',
  hari: 'Rabu',
  url: '/ceklokasi'
}, {
  id: 2,
  name: 'Teguh smk',
  krj: 'Pasang Baru',
  tgl: '2019/12/16',
  jam: '13:30',
  hari: 'Sabtu',
  url: '/ceklokasi'
}, {
  id: 3,
  name: 'Teguh sma',
  krj: 'Maintenance',
  tgl: '2019/12/17',
  jam: '14:30',
  hari: 'Kamis',
  url: '/ceklokasi'
}, {
  id: 4,
  name: 'Teguh stm',
  krj: 'Pasang Baru',
  tgl: '2019/12/18',
  jam: '09:30',
  hari: 'Selasa',
  url: '/ceklokasi'
}]


export default {
  data () {
    return {
      schedules,
    }
  }
}
</script>

    


