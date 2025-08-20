<template>
  <div class="quality-features py-13 bg-grey-lighten-2">
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          lg=""
          v-for="item in cards"
          :key="item.title"
          class="px-2"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="text-center d-flex align-center justify-center px-4"
              height="300"
              :elevation="isHovering ? 2 : 0"
              :color="isHovering ? 'blue-lighten-4' : 'white'"
              style="cursor: pointer"
            >
              <div class="parent">
                <span v-html="item.svg"></span>
                <v-card-title
                  style="
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 16px;
                  "
                  >{{ item.title }}</v-card-title
                >
                <v-card-text>{{ item.desc }}</v-card-text>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "quality and saving",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum",
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 60px; color: #800080;" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
        `,
      },
      {
        title: "global warehouse",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum",
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 60px; color: #800080;" viewBox="0 0 24 24" fill="currentColor"><path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM8 15V17H16V15H8Z"></path></svg>
        `,
      },
      {
        title: "fast shipping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum",
        svg: `
           <svg xmlns="http://www.w3.org/2000/svg" style="width: 60px; color: #800080;" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z"></path></svg>
        `,
      },
      {
        title: "payment security",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum",
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 60px; color: #800080;" viewBox="0 0 24 24" fill="currentColor"><path d="M21 10H11V17.3823C11 18.9449 11.7775 20.4053 13.074 21.2742L14.1569 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.44694 2 3.99826 2H15.9968L21 7V10ZM13 12H21V17.3823C21 18.2786 20.5544 19.1156 19.8125 19.6128L17 21.4978L14.1875 19.6128C13.4456 19.1156 13 18.2786 13 17.3823V12Z"></path></svg>
        `,
      },
      {
        title: "have questions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum",
        svg: `
           <svg xmlns="http://www.w3.org/2000/svg" style="width: 60px; color: #800080;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"></path></svg>
        `,
      },
    ],
  }),
};
</script>
