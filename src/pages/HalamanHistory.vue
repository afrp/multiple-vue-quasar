<template>
  <div>
    <q-header class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn label="History" icon="arrow_back" @click.stop="$router.go(-1)"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page padding class="q-pt-xl">
        <div class="q-pt-xl">
            <div class="q-pa-md">
            <q-table
                grid     
                card-class="bg-primary text-white"   
                :data="data"
                :columns="columns"
                row-key="name"
                :filter="filter"
                @row-click="onRowClick"
                hide-header
                :hide-bottom="data.length > 0" 
            >
                <template v-slot:top>
                <q-input class="full-width" dense debounce="300" v-model="filter" placeholder="Search">
                    <template v-slot:append>
                    <q-icon name="search" ></q-icon>
                    </template>
                </q-input>
                </template>
            </q-table>
            </div>
        </div>
    </q-page>
  </div>
</template>


<script>
export default {
  data () {
    return {
      filter: '',
      columns: [
        {
          name: 'Tanggal',
          required: true,
          label: 'Tanggal',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'konsumen', align: 'center', label: 'Konsumen', field: 'konsumen', sortable: true },
        { name: 'jeniskerjaan', label: 'Jenis Kerjaan', field: 'jeniskerjaan', sortable: true },
        { name: 'typegps', label: 'Type GPS', field: 'typegps' }
      ],
      data: [
        {
          name: '2019/12/05',
          konsumen: 'Teguh',
          jeniskerjaan: 'Maintenance',
          typegps: 'ID303'
        },
        {
          name: '2019/12/04',
          konsumen: 'Pw',
          jeniskerjaan: 'Pasang Baru',
          typegps: 'ID103'
        },
        {
          name: '2019/12/03',
          konsumen: 'Ade',
          jeniskerjaan: 'Maintenance',
          typegps: 'ID311'
        },
        {
          name: '2019/12/03',
          konsumen: 'Maul',
          jeniskerjaan: 'Pasang Baru',
          typegps: 'ID311'
        },
        {
          name: '2019/12/01',
          konsumen: 'agil',
          jeniskerjaan: 'Maintenance',
          typegps: 'ID103'
        }
        
      ]
    }
  },
  methods: {
    onRowClick (evt, row) {
      console.log('clicked on', evt, row),
       this.$router.push('/detailhistory')
       
    }
  }
}
</script>

    


