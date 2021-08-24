<template>
  <v-row justify="center">
    <v-dialog
      v-model="clicked"
      @click:outside="closed"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Recipe Data</span>
        </v-card-title>
        <v-form v-model="signupValidity">
          <v-card-text>
            <v-container>
              <v-row no-gutters>
                <v-col cols="12" md="6" class="pr-5">
                  <v-text-field label="Name Recipe" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="imageURL" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="pr-5">
                  <v-text-field label="Ingredients" required>
                    <template v-slot:append>
                      <v-btn icon>
                        <v-icon> mdi-plus</v-icon>
                      </v-btn>
                    </template>
                  </v-text-field>

                  <!-- <v-list ref="form">
                    <v-card>
                      <div
                        v-for="(element, index) in items.ingredients"
                        :key="index"
                      >
                        <v-list-item>
                          <template v-slot:default>
                            <v-list-item-content>
                              <v-list-item-title
                                >{{ index + 1 }}- {{ element.title }}
                              </v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action
                              @click.stop="deleteIngredients(index)"
                              ><v-icon small
                                >mdi-close</v-icon
                              ></v-list-item-action
                            >
                          </template>
                        </v-list-item>
                      </div>
                    </v-card>
                  </v-list> -->
                </v-col>
                <v-col cols="12" md="6" class="pr-5">
                  <v-text-field label="Preparation" required>
                    <template v-slot:append>
                      <v-btn icon>
                        <v-icon> mdi-plus</v-icon>
                      </v-btn>
                    </template>
                  </v-text-field>
                  <!-- <v-list ref="form">
                    <v-card>
                      <div
                        v-for="(element, index) in items.preparation"
                        :key="index"
                      >
                        <v-list-item>
                          <template v-slot:default>
                            <v-list-item-content>
                              <v-list-item-title
                                >{{ index + 1 }}- {{ element.step }}
                              </v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action
                              @click.stop="deletePreparation(index)"
                              ><v-icon small
                                >mdi-close</v-icon
                              ></v-list-item-action
                            >
                          </template>
                        </v-list-item>
                      </div>
                    </v-card>
                  </v-list> -->
                </v-col>

                <v-col cols="12" md="6">
                  <v-autocomplete
                    item-value="id"
                    item-text="name"
                    :items="categories"
                    label="Category"
                    solo
                    full-width
                    style="width: 255px;"
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" md="6" class="mt-3 ">
                  <v-btn color="success" @click="reset">
                    Save
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closed">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="saved"
              :disabled="!saveValidity"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    saveValidity: false,
  }),
  props: ["clicked", "items"],
  methods: {
    closed() {
      this.clicked = false;
      this.$emit("closing");
    },
    saved() {
      this.clicked = false;
      this.$emit("closing");
      this.$emit("save");
    },
  },
};
</script>

<style></style>
