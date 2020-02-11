<template>
  <div>
    <div class="q-px-md q-pt-md">
      <q-breadcrumbs class="text-brown">
        <template v-slot:separator>
          <q-icon
            size="1.5em"
            name="chevron_right"
            color="primary"
          />
        </template>
        <q-breadcrumbs-el
          label="Home"
          icon="home"
        />
        <q-breadcrumbs-el
          label="Components"
          icon="widgets"
        />
        <q-breadcrumbs-el
          label="Breadcrumbs"
          icon="navigation"
        />
      </q-breadcrumbs>
    </div>
    <div class="row q-col-gutter-md q-pa-md">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <q-card class="my-card">
          <q-card-section>
            <apexchart
              type="area"
              height="350"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <q-card class="my-card">
          <q-card-section>
            <apexchart
              type="bar"
              height="350"
              :options="chartOptions2"
              :series="series2"
            ></apexchart>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['2018-09-19T00:00:00', '2018-09-19T01:30:00', '2018-09-19T02:30:00', '2018-09-19T03:30:00', '2018-09-19T04:30:00', '2018-09-19T05:30:00', '2018-09-19T06:30:00']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      series2: [{
        data: [44, 55, 41, 64, 22, 43, 21]
      }, {
        data: [53, 32, 33, 52, 13, 44, 32]
      }],
      chartOptions2: {
        chart: {
          type: 'bar',
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
        }
      }
    }
  }
}
</script>
