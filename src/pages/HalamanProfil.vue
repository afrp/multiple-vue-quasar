<template>
  <div>
    <q-header class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn label="Profil" icon="arrow_back" @click.stop="$router.go(-1)"/>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page padding>
      <div class="kartuprofil">
        <q-card bordered flat>
          <div class="q-ma-md">
            <div>
              <span>Nama Lengkap</span>
              <q-input outlined class="q-mt-sm q-mb-sm" />
            </div>
            <div>
              <span>Username</span>
              <q-input outlined class="q-mt-sm q-mb-sm" />
            </div>
            <div>
              <span>Email</span>
              <q-input outlined class="q-mt-sm q-mb-sm" />
            </div>
            <div>
              <span>Password Lama</span>
              <q-input outlined class="q-mt-sm q-mb-sm" />
            </div>
            <div>
              <span>Password Baru</span>
              <q-input outlined class="q-mt-sm q-mb-sm" />
            </div>
            <div class="q-pt-lg">
              <q-btn label="save" icon="save" class="full-width bg-yellow text-white" rounded />
            </div>
          </div>
        </q-card>
      </div>
    </q-page>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.logo-gpsku {
  width: 150px;
}
.logo-gpskuatas {
  text-align: center;
}
.kartuprofil {
  padding-top: 30%;
}
</style>


    


