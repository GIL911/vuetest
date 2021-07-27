<template>
  <v-container>
      <v-card>
          <v-card-title>Typography</v-card-title>
          <v-container class="grey lighten-3">
              <v-card class="pa-3" outlined>
                    <p class="text-h1"> Heading 2</p>
                    <p class="text-h2"> Heading 3</p>
                    <p class="text-h3 text-sm-subtitle-1"> Heading 3</p>
                    <!-- Heading 3
                    Heading 4
                    Heading 5
                    Heading 6
                    Subtitle 1
                    Subtitle 2
                    Body 1
                    Body 2
                    BUTTON
                    Caption
                    OVERLINE -->
              </v-card>
          </v-container>
      </v-card>

        <v-card class="mt-5">
          <v-card-title>chart</v-card-title>
          <v-container class="grey lighten-3">
              <v-card class="pa-3" outlined>
                     <v-sparkline
                        :value="value"
                        :gradient="gradient"
                        :smooth="radius || false"
                        :padding="padding"
                        :line-width="width"
                        :stroke-linecap="lineCap"
                        :gradient-direction="gradientDirection"
                        :fill="fill"
                        :type="type"
                        :auto-line-width="autoLineWidth"
                        auto-draw
                    ></v-sparkline>
                    </v-card>
          </v-container>
      </v-card>

      <v-card
    class="mt-5 mx-auto text-center"
    color="green"
    dark
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="text-h4 font-weight-thin">
        Sales Last 24h
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        block
        text
      >
        Go to Report
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-container>



  
</template>

<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    data: () => ({

        
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
  }
</script>

<style>

</style>