<template>
  <section class="properties-section admin-properties-detail add-edit-input">
    <section class="property-part-2 properties-details-info">
      <b-container fluid>
        <section class="property-details my-4">
          <div class="go-back mb-4 cursor-pointer" @click="$router.go(-1)">
            <left-arrow /><left-arrow class="mr-2" />Go Back
          </div>
        </section>
        <b-row>
          <b-col cols="12" lg="9" md="9" class="mb-3">
            <div class="property-broker-profile">
              <div class="profile-upload-box">
                <b-row>
                  <b-col v-if="isAdmin" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Broker Name*</label>
                      <div class="auth-form-group text-left">
                        <multiselect
                          v-model="propertyInfo.seller"
                          v-validate="'required'"
                          placeholder="Select Broker Name"
                          :options="sellerArr"
                          :searchable="true"
                          label="firstName"
                          track-by="_id"
                          name="Broker Name"
                        >
                          <template
                            slot="singleLabel"
                            slot-scope="{ option }"
                            >{{
                              `${option.firstName} ${option.lastName}`
                            }}</template
                          >
                          <template slot="option" slot-scope="props">
                            {{
                              `${props.option.firstName} ${props.option.lastName}`
                            }}
                          </template>
                        </multiselect>
                        <b-form-text class="error-msg">{{
                          errors.first('Broker Name')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Property Short Name*</label>
                      <div class="auth-form-group text-left">
                        <b-input-group class="eb-input-group">
                          <b-form-input
                            v-model="propertyInfo.title"
                            v-validate="'required'"
                            :class="{
                              Invalid: errors.first('Property Short Name'),
                            }"
                            placeholder="Empire"
                            name="Property Short Name"
                          />
                        </b-input-group>
                        <b-form-text class="error-msg">{{
                          errors.first('Property Short Name')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Property Name*</label>
                      <div class="auth-form-group text-left">
                        <b-input-group class="eb-input-group">
                          <b-form-input
                            v-model="propertyInfo.subTitle"
                            v-validate="'required'"
                            :class="{
                              Invalid: errors.first('Property Name'),
                            }"
                            placeholder="2 BHK Flat in Vaishnodevi Circle, Ahmedabad Leasehold"
                            name="Property Name"
                          />
                        </b-input-group>
                        <b-form-text class="error-msg">{{
                          errors.first('Property Name')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="4" lg="4" md="4" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Property Types*</label>
                      <div class="auth-form-group text-left">
                        <multiselect
                          v-model="propertyInfo.propertyType"
                          v-validate="'required'"
                          placeholder="Select Property Types"
                          :options="propertyTypes"
                          :searchable="true"
                          label="name"
                          track-by="_id"
                          name="Property Types"
                        ></multiselect>
                        <b-form-text class="error-msg">{{
                          errors.first('Property Types')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="4" lg="4" md="4" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Type*</label>
                      <div class="auth-form-group text-left">
                        <multiselect
                          v-model="propertyInfo.saleType"
                          v-validate="'required'"
                          placeholder="Select Type"
                          :options="['Sell', 'Rent', 'Lease']"
                          :searchable="true"
                          name="Type"
                        ></multiselect>
                        <b-form-text class="error-msg">{{
                          errors.first('Type')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="4" lg="4" md="4" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Construction Status*</label>
                      <div class="auth-form-group text-left">
                        <multiselect
                          v-model="propertyInfo.constructionStatus"
                          v-validate="'required'"
                          placeholder="Select Construction Status"
                          :options="['Ready to Move', 'Under Construction']"
                          :searchable="true"
                          name="Construction Status"
                        ></multiselect>
                        <b-form-text class="error-msg">{{
                          errors.first('Construction Status')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="3" lg="3" md="3" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Ownership Type*</label>
                      <div class="auth-form-group text-left">
                        <multiselect
                          v-model="propertyInfo.ownership"
                          v-validate="'required'"
                          placeholder="Select Ownership Type"
                          :options="[
                            'Freehold',
                            'Leasehold',
                            'Power Of Attorney',
                            'Co-operative Society',
                          ]"
                          :searchable="true"
                          name="Ownership Type"
                        ></multiselect>
                        <b-form-text class="error-msg">{{
                          errors.first('Ownership Type')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="3" lg="3" md="3" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Furnishing Type*</label>
                      <div class="auth-form-group text-left">
                        <multiselect
                          v-model="propertyInfo.furnishing"
                          v-validate="'required'"
                          placeholder="Select Furnishing Type"
                          :options="[
                            'Furnished',
                            'Semi-Furnished',
                            'Unfurnished',
                          ]"
                          :searchable="true"
                          name="Select Furnishing Type"
                        ></multiselect>
                        <b-form-text class="error-msg">{{
                          errors.first('Select Furnishing Type')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="3" lg="3" md="3" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Facing*</label>
                      <div class="auth-form-group text-left">
                        <multiselect
                          v-model="propertyInfo.facing"
                          v-validate="'required'"
                          placeholder="Select Facing"
                          :options="[
                            'East',
                            'North',
                            'North - East',
                            'North - West',
                            'South',
                            'South - East',
                          ]"
                          :searchable="true"
                          name="Facing"
                        ></multiselect>
                        <b-form-text class="error-msg">{{
                          errors.first('Facing')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="3" lg="3" md="3" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Since*</label>
                      <div class="auth-form-group text-left">
                        <multiselect
                          v-model="propertyInfo.buildingAge"
                          v-validate="'required'"
                          placeholder="Select Construction Year"
                          :options="years"
                          :searchable="true"
                          name="Construction Year"
                        ></multiselect>
                        <b-form-text class="error-msg">{{
                          errors.first('Construction Year')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="3" lg="3" md="3" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Total Rooms*</label>
                      <div class="auth-form-group text-left">
                        <b-input-group class="eb-input-group">
                          <b-form-input
                            v-model="propertyInfo.totalRoom"
                            v-validate="'required|numeric|min:1|max:10'"
                            :class="{
                              Invalid: errors.first('Total Rooms'),
                            }"
                            placeholder="4"
                            name="Total Rooms"
                            type="number"
                          />
                        </b-input-group>
                        <b-form-text class="error-msg">{{
                          errors.first('Total Rooms')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="3" lg="3" md="3" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Bathroom*</label>
                      <div class="auth-form-group text-left">
                        <b-input-group class="eb-input-group">
                          <b-form-input
                            v-model="propertyInfo.bathroom"
                            v-validate="'required|numeric|min:1|max:10'"
                            :class="{
                              Invalid: errors.first('Bathroom'),
                            }"
                            placeholder="2"
                            name="Bathroom"
                            type="number"
                          />
                        </b-input-group>
                        <b-form-text class="error-msg">{{
                          errors.first('Bathroom')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="3" lg="3" md="3" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Floor*</label>
                      <div class="auth-form-group text-left">
                        <b-input-group class="eb-input-group">
                          <b-form-input
                            v-model="propertyInfo.floor"
                            v-validate="'required|numeric|min:1|max:250'"
                            :class="{
                              Invalid: errors.first('Floor'),
                            }"
                            placeholder="2"
                            name="Floor"
                            type="number"
                          />
                        </b-input-group>
                        <b-form-text class="error-msg">{{
                          errors.first('Floor')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="3" lg="3" md="3" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Parking Spots*</label>
                      <div class="auth-form-group text-left">
                        <b-input-group class="eb-input-group">
                          <b-form-input
                            v-model="propertyInfo.parkingSpots"
                            v-validate="'required|numeric|min:1|max:250'"
                            :class="{
                              Invalid: errors.first('Parking Spots'),
                            }"
                            placeholder="2"
                            name="Parking Spots"
                            type="number"
                          />
                        </b-input-group>
                        <b-form-text class="error-msg">{{
                          errors.first('Parking Spots')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <div class="eb-form">
                  <label class="eb-input-label">Description*</label>
                  <div class="auth-form-group text-left">
                    <b-input-group class="eb-input-group">
                      <b-form-textarea
                        v-model="propertyInfo.description"
                        v-validate="'required|min:50|max:1500'"
                        rows="4"
                        :class="{
                          Invalid: errors.first('Description'),
                        }"
                        placeholder="The stylish 15-storey Avanti tower is equipped..."
                        name="Description"
                      />
                    </b-input-group>
                    <b-form-text class="error-msg">{{
                      errors.first('Description')
                    }}</b-form-text>
                  </div>
                </div>
                <div class="eb-form pt-3">
                  <label class="eb-input-label">Facilities*</label>
                  <div class="auth-form-group text-left">
                    <b-input-group class="eb-input-group">
                      <b-form-textarea
                        v-model="propertyInfo.facilities"
                        v-validate="'required|min:50|max:1500'"
                        rows="3"
                        :class="{
                          Invalid: errors.first('Facilities'),
                        }"
                        placeholder="The stylish 15-storey Avanti tower is equipped..."
                        name="Facilities"
                      />
                    </b-input-group>
                    <b-form-text class="error-msg">{{
                      errors.first('Facilities')
                    }}</b-form-text>
                  </div>
                </div>
                <b-row class="pt-3">
                  <b-col cols="3" lg="3" md="3" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Payment Type*</label>
                      <div class="auth-form-group text-left">
                        <multiselect
                          v-model="propertyInfo.payment.type"
                          v-validate="'required'"
                          placeholder="Select Payment Type"
                          :options="['Yearly', 'Monthly', 'Half Yearly']"
                          :searchable="true"
                          name="Payment Type"
                        ></multiselect>
                        <b-form-text class="error-msg">{{
                          errors.first('Payment Type')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="3" lg="3" md="3" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Currency*</label>
                      <div class="auth-form-group text-left">
                        <multiselect
                          v-model="propertyInfo.payment.currency"
                          v-validate="'required'"
                          placeholder="Select Currency"
                          :options="currencyArray"
                          :searchable="true"
                          name="Select Currency"
                        ></multiselect>
                        <b-form-text class="error-msg">{{
                          errors.first('Select Currency')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="3" lg="3" md="3" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Price*</label>
                      <div class="auth-form-group text-left">
                        <b-input-group class="eb-input-group">
                          <b-form-input
                            v-model.number="propertyInfo.payment.max"
                            v-validate="'required|decimal:3'"
                            :class="{
                              Invalid: errors.first('Property Price'),
                            }"
                            placeholder="10"
                            type="number"
                            name="Property Price"
                          />
                        </b-input-group>
                        <b-form-text class="error-msg">{{
                          errors.first('Property Price')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="3" lg="3" md="3" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Square Feet*</label>
                      <div class="auth-form-group text-left">
                        <b-input-group class="eb-input-group">
                          <b-form-input
                            v-model.number="propertyInfo.squareFeet.max"
                            v-validate="'required|numeric|max:8|min:2'"
                            :class="{
                              Invalid: errors.first('Square Feet'),
                            }"
                            placeholder="2511"
                            type="number"
                            name="Square Feet"
                          />
                        </b-input-group>
                        <b-form-text class="error-msg">{{
                          errors.first('Square Feet')
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <b-row
                  v-for="(docs, docsIndex) of propertyInfo.documents"
                  :key="docsIndex"
                >
                  <b-col cols="4" lg="4" md="4">
                    <div class="eb-form mt-3">
                      <label class="eb-input-label">Document Name*</label>
                      <div class="auth-form-group text-left">
                        <b-input-group class="eb-input-group">
                          <b-form-input
                            v-model="docs.name"
                            v-validate="'required|min:5|max:150'"
                            :class="{
                              Invalid: errors.first(
                                `Document Name ${docsIndex}`
                              ),
                            }"
                            placeholder="Browser"
                            :name="'Document Name' + docsIndex"
                          />
                        </b-input-group>
                        <b-form-text class="error-msg">{{
                          errors.first('Document Name' + docsIndex)
                        }}</b-form-text>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="4" lg="4" md="4">
                    <div class="eb-form mt-3">
                      <label class="eb-input-label">Choose File*</label>
                      <b-form-group label-size="sm">
                        <input
                          :ref="'docsFile' + docsIndex"
                          v-validate="{ required: !docs.fileLocation }"
                          style="dislay: none"
                          type="file"
                          :name="'Document File Name' + docsIndex"
                          @input="changeDocsFile($event, docsIndex, docs)"
                        />
                        <b-form-text class="error-msg">{{
                          errors.first('Document File Name' + docsIndex)
                        }}</b-form-text>
                      </b-form-group>
                    </div>
                  </b-col>
                  <b-col cols="4" lg="4" md="4">
                    <div class="eb-form mt-3">
                      <label class="eb-input-label"></label>
                      <div class="auth-form-group text-left">
                        <b-button
                          v-if="docsIndex === 0"
                          variant="primary"
                          @click="addMoreDocs"
                          >Add More Document</b-button
                        ><b-button
                          v-else
                          variant="danger"
                          @click="removeDocs(docsIndex)"
                          >Remove Document</b-button
                        >
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col v-if="reloadMap" cols="6" lg="6" md="6" class="mb-3">
                    <leaflet-map
                      id="vendor-admin"
                      :latlng="[
                        Number(propertyInfo.address.latitude),
                        Number(propertyInfo.address.longitude),
                      ]"
                      height="height: 380px;z-index: 1;"
                      @changeAddress="changeAddress"
                    />
                  </b-col>
                  <b-col cols="6" lg="6" md="6" class="mb-3">
                    <div class="eb-form">
                      <label class="eb-input-label">Address*</label>
                      <div class="auth-form-group text-left">
                        <b-input-group class="eb-input-group">
                          <b-form-textarea
                            v-model="propertyInfo.address.fullAddress"
                            v-validate="'required|min:10|max:1500'"
                            rows="3"
                            :class="{
                              Invalid: errors.first('Address'),
                            }"
                            placeholder="H-604 ICB Floora Gota Ahmedabad"
                            name="Address"
                          />
                        </b-input-group>
                        <b-form-text class="error-msg">{{
                          errors.first('Address')
                        }}</b-form-text>
                      </div>
                    </div>
                    <div class="eb-form mt-3">
                      <label class="eb-input-label">Sort Address*</label>
                      <div class="auth-form-group text-left">
                        <b-input-group class="eb-input-group">
                          <b-form-input
                            v-model="propertyInfo.address.sortAddress"
                            v-validate="'required|min:10|max:1500'"
                            :class="{
                              Invalid: errors.first('Sort Address'),
                            }"
                            placeholder="Gota Ahmedabad"
                            name="Sort Address"
                          />
                        </b-input-group>
                        <b-form-text class="error-msg">{{
                          errors.first('Sort Address')
                        }}</b-form-text>
                      </div>
                    </div>
                    <b-row>
                      <b-col cols="6" lg="6" md="6" class="mt-3">
                        <div class="eb-form">
                          <label class="eb-input-label">City*</label>
                          <div class="auth-form-group text-left">
                            <b-input-group class="eb-input-group">
                              <b-form-input
                                v-model="propertyInfo.address.city"
                                v-validate="'required'"
                                :class="{
                                  Invalid: errors.first('City'),
                                }"
                                placeholder="Ahmedabad"
                                name="City"
                              />
                            </b-input-group>
                            <b-form-text class="error-msg">{{
                              errors.first('City')
                            }}</b-form-text>
                          </div>
                        </div>
                      </b-col>
                      <b-col cols="6" lg="6" md="6" class="mt-3">
                        <div class="eb-form">
                          <label class="eb-input-label">Pincode*</label>
                          <div class="auth-form-group text-left">
                            <b-input-group class="eb-input-group">
                              <b-form-input
                                v-model="propertyInfo.address.pinCode"
                                v-validate="'required'"
                                :class="{
                                  Invalid: errors.first('Pincode'),
                                }"
                                placeholder="362630"
                                name="Pincode"
                              />
                            </b-input-group>
                            <b-form-text class="error-msg">{{
                              errors.first('Pincode')
                            }}</b-form-text>
                          </div>
                        </div>
                      </b-col>
                      <b-col cols="6" lg="6" md="6" class="mt-3">
                        <div class="eb-form">
                          <label class="eb-input-label">State*</label>
                          <div class="auth-form-group text-left">
                            <b-input-group class="eb-input-group">
                              <b-form-input
                                v-model="propertyInfo.address.state"
                                v-validate="'required'"
                                :class="{
                                  Invalid: errors.first('State'),
                                }"
                                placeholder="Gujarat"
                                name="State"
                              />
                            </b-input-group>
                            <b-form-text class="error-msg">{{
                              errors.first('State')
                            }}</b-form-text>
                          </div>
                        </div>
                      </b-col>
                      <b-col cols="6" lg="6" md="6" class="mt-3">
                        <div class="eb-form">
                          <label class="eb-input-label">India*</label>
                          <div class="auth-form-group text-left">
                            <b-input-group class="eb-input-group">
                              <b-form-input
                                v-model="propertyInfo.address.country"
                                v-validate="'required'"
                                :class="{
                                  Invalid: errors.first('India'),
                                }"
                                placeholder="India"
                                name="India"
                              />
                            </b-input-group>
                            <b-form-text class="error-msg">{{
                              errors.first('India')
                            }}</b-form-text>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
                <b-row>
                  <div class="d-flex">
                    <div class="d-flex pr-2 setting-toggle-title">
                      Drive In Doors
                    </div>
                    <b-form-checkbox
                      v-model="propertyInfo.driveInDoors"
                      name="check-button"
                      switch
                    >
                    </b-form-checkbox>
                  </div>
                  <div class="d-flex">
                    <div class="d-flex pr-2 setting-toggle-title">
                      Heavy Power
                    </div>
                    <b-form-checkbox
                      v-model="propertyInfo.heavyPower"
                      name="check-button"
                      switch
                    >
                    </b-form-checkbox>
                  </div>
                  <div class="d-flex">
                    <div class="d-flex pr-2 setting-toggle-title">
                      High Ceilings
                    </div>
                    <b-form-checkbox
                      v-model="propertyInfo.highCeilings"
                      name="check-button"
                      switch
                    >
                    </b-form-checkbox>
                  </div>
                  <div class="d-flex">
                    <div class="d-flex pr-2 setting-toggle-title">
                      Standing Building
                    </div>
                    <b-form-checkbox
                      v-model="propertyInfo.standingBuilding"
                      name="check-button"
                      switch
                    >
                    </b-form-checkbox>
                  </div>
                  <div class="d-flex">
                    <div class="d-flex pr-2 setting-toggle-title">
                      Working With Another Broker
                    </div>
                    <b-form-checkbox
                      v-model="propertyInfo.workingWithAnotherBroker"
                      name="check-button"
                      switch
                    >
                    </b-form-checkbox>
                  </div>
                  <div class="d-flex">
                    <div class="d-flex pr-2 setting-toggle-title">
                      Sliding Door
                    </div>
                    <b-form-checkbox
                      v-model="propertyInfo.slidingDoor"
                      name="check-button"
                      switch
                    >
                    </b-form-checkbox>
                  </div>
                </b-row>
                <b-row class="float-right pr-3">
                  <b-button variant="success" @click="saveData"
                    >Save Data</b-button
                  >
                </b-row>
                <br /><br />
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="3" md="3">
            <div class="property-broker-profile">
              <div class="profile-upload-box">
                <div class="image-upload">
                  <div
                    class="d-flex justify-content-center align-items-center h-100"
                    @click="$refs.getProfile.click()"
                  >
                    <input
                      ref="getProfile"
                      type="file"
                      accept="image/*"
                      style="display: none"
                      multiple
                      @change="addImages"
                    />
                    <image-plus />
                  </div>
                </div>
              </div>
              <h3 class="attached-photos-title pb-2">Add Photos</h3>

              <div
                v-for="(item, index) of uploadPercentage"
                :key="index"
                class="pt-3"
              >
                <b-progress
                  v-if="item.value > 0"
                  show-progress
                  variant="success"
                  :max="100"
                  :animated="true"
                >
                  <b-progress-bar :value="item.value">
                    <span> Uploading {{ item.name }} {{ item.value }}% </span>
                  </b-progress-bar>
                </b-progress>
              </div>
              <div
                v-if="propertyInfo && propertyInfo.images.length > 0"
                class="property-broker-profile"
              >
                <h3>Attached Photos</h3>
                <div class="row px-2">
                  <div
                    v-for="(item, index) of propertyInfo.images"
                    :key="index"
                    class="col-md-6 p-2"
                    @error="imgErrr"
                  >
                    <div class="broker-attached-photos">
                      <img height="106" :src="item" />
                    </div>
                    <i
                      class="fa fa-trash text-danger cursor-pointer"
                      @click="deleteImage(index)"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import Axios from 'axios'
import LeafletMap from './LeafletMap'
import { initialPayload, initialDocs } from './config'
import LeftArrow from '~/components/svg/Left-arrow'
import ImagePlus from '~/components/svg/ImagePlus'
import { currencyArray } from '~/db/currency'
import {
  GET_S3_PROFILE_UPLOAD_URL,
  FETCH_PROPERTY_TYPE_SPECIFIC,
  ADMIN_FETCH_ALL_SELLER_SECIFIC_DATA,
  PROPERTY_SAVE,
  PROPERTY_EDIT,
  ADMIN_FETCH_PROPERTIES_BY_ID,
} from '~/services/ENDPOINT'
export default {
  $_veeValidate: {
    validator: 'new',
  },
  name: 'AddEditPropertyCommon',
  components: {
    LeftArrow,
    ImagePlus,
    LeafletMap,
  },
  props: {
    editMode: {
      type: Boolean,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      propertyInfo: _.cloneDeep(initialPayload),
      uploadPercentage: [],
      propertyTypes: [],
      years: [],
      currencyArray,
      sellerArr: [],
      paramsId: null,
      reloadMap: false,
    }
  },
  computed: {
    ...mapGetters({
      userType: 'auth/fetcUserType',
      loggedInUser: 'auth/loggedInUser',
    }),
  },
  mounted() {
    this.$nextTick(() => {
      this.getYears()
      this.fetchProertyType()
      if (this.isAdmin) {
        this.fetchBrokerList()
      } else {
        this.propertyInfo.seller = this.loggedInUser._id
      }
      if (this.editMode) {
        const { id } = this.$route.query
        this.paramsId = id
        if (id) {
          this.getPropertyById()
        } else {
          this.$toast.error('Id Not Found')
          this.$router.go(-1)
        }
      } else {
        this.mapReRender()
      }
    })
  },
  methods: {
    clickFile(key) {
      this.$refs.docsFile[0][0].click()
    },
    addMoreDocs() {
      this.propertyInfo.documents.unshift(_.cloneDeep(initialDocs))
    },
    removeDocs(index) {
      this.propertyInfo.documents.splice(index, 1)
    },
    async changeDocsFile(e, index, item) {
      const file = e.target.files[0]
      try {
        const extension = this.getExtension(file.name)
        const urls = await GET_S3_PROFILE_UPLOAD_URL({
          floder: 'propertie-documents',
          extension,
        })
        Axios.put(urls.url, file, {
          onUploadProgress(progressEvent) {
            console.log(
              parseInt(
                Math.round((progressEvent.loaded / progressEvent.total) * 100)
              )
            )
          },
        })
          .then((res) => {
            const newObj = item
            newObj.fileLocation = urls.imageUrl
            newObj.fileKey = urls.key
            newObj.fileName = file.name
            this.$set(this.propertyInfo.documents, index, newObj)
            this.$toast.success('Documents Added Successfully')
          })
          .catch(() => {
            this.$toast.error('Something Went Worng')
          })
      } catch ({ data }) {
        this.$toast.error(data.message)
      }
    },
    deleteImage(index) {
      this.$bvModal
        .msgBoxConfirm('are you sure you want to delete?')
        .then((value) => {
          if (value) {
            this.propertyInfo.images.splice(index, 1)
          }
        })
        .catch(() => {})
    },
    async getPropertyById() {
      try {
        this.$nextTick(() => this.$nuxt.$loading.start())
        const { data } = await ADMIN_FETCH_PROPERTIES_BY_ID(this.paramsId)
        this.propertyInfo = _.cloneDeep(data)
        if (this.propertyInfo.documents.length === 0) {
          this.addMoreDocs()
        }
        this.reloadMap = false
        this.$nextTick(() => {
          this.reloadMap = true
        })
      } catch ({ data }) {
        console.log(data)
        this.$toast.error('Property Not Found')
        this.$router.go(-1)
      } finally {
        this.loader = false
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
    mapReRender() {
      this.reloadMap = false
      this.$nextTick(() => {
        this.reloadMap = true
      })
    },
    saveData() {
      this.$validator.validate().then(async (isValid) => {
        if (this.propertyInfo.images.length < 5) {
          this.$toast.error('Please Upload Minimum 5 Images')
          window.scrollTo({ top: 0, behavior: 'smooth' })
          return
        }
        if (isValid) {
          // save Data
          try {
            const payload = JSON.parse(JSON.stringify(this.propertyInfo))

            payload.seller =
              this.propertyInfo.seller._id || this.loggedInUser._id

            payload.propertyType = this.propertyInfo.propertyType._id
            payload.status = 'Pending'

            this.$nextTick(() => this.$nuxt.$loading.start())
            let data = null
            if (this.editMode) {
              data = await PROPERTY_EDIT(payload)
            } else {
              data = await PROPERTY_SAVE(payload)
            }
            this.$toast.success(data.message)
            this.$router.push({
              path: `/${this.isAdmin ? 'admin-land' : 'seller'}/properties`,
              query: { status: 'Pending' },
            })
          } catch ({ data }) {
            this.$toast.error(data.message)
          } finally {
            this.$nextTick(() => this.$nuxt.$loading.finish())
          }
        } else window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    },
    async fetchBrokerList() {
      try {
        const data = await ADMIN_FETCH_ALL_SELLER_SECIFIC_DATA()
        this.sellerArr = data
      } catch ({ data }) {
        this.$toast.error(data.message)
      }
    },
    changeAddress(v) {
      const { address, latlng } = v
      this.propertyInfo.address.latitude = latlng.lat || ''
      this.propertyInfo.address.longitude = latlng.lng || ''
      this.propertyInfo.address.pinCode = address.Postal || ''
      this.propertyInfo.address.city = address.City || ''
      this.propertyInfo.address.state = address.Region || ''
      this.propertyInfo.address.country = address.CountryCode || ''
      this.propertyInfo.address.sortAddress = address.Address || ''
      this.propertyInfo.address.fullAddress = address.LongLabel || ''
    },
    getYears() {
      const currentYear = new Date().getFullYear()
      const range = (start, stop, step) =>
        Array.from(
          { length: (stop - start) / step + 1 },
          (_, i) => start + i * step
        )
      this.years = range(currentYear, currentYear - 100, -1)
    },
    async fetchProertyType() {
      const payload = {
        currentPage: 1,
        perRowPage: 200,
        filed: 'name _id',
        search: '',
      }
      try {
        const { data } = await FETCH_PROPERTY_TYPE_SPECIFIC(payload)
        this.propertyTypes = data.data
      } catch ({ data }) {
        this.$toast.error(data.message)
      }
    },
    imgErrr(e) {
      e.target.src = require('~/assets/images/avatar.svg')
    },
    updateProgressBar(name, value) {
      const upload = this.uploadPercentage.find((i) => i.name === name)
      const inx = this.uploadPercentage.findIndex((i) => i.name === name)
      upload.value = value
      this.$set(this.uploadPercentage, inx, upload)
    },
    async addImages(e) {
      const files = e.target.files
      this.uploadPercentage = []
      for (const file of files) {
        this.uploadPercentage.push({ name: file.name, value: 0 })
        try {
          const extension = this.getExtension(file.name)
          const urls = await GET_S3_PROFILE_UPLOAD_URL({
            floder: 'propertie-images',
            extension,
          })
          Axios.put(urls.url, file, {
            onUploadProgress: function (progressEvent) {
              this.updateProgressBar(
                file.name,
                parseInt(
                  Math.round((progressEvent.loaded / progressEvent.total) * 100)
                )
              )
            }.bind(this),
          })
            .then((res) => {
              this.updateProgressBar(file.name, 0)
              this.propertyInfo.images.push(urls.imageUrl)
              this.$toast.success('Images Added Successfully')
            })
            .catch(() => {
              this.$toast.error('Something Went Worng')
            })
        } catch ({ data }) {
          this.$toast.error(data.message)
        }
      }
    },
  },
}
</script>
<style>
.image-upload {
  width: 170px;
  height: 170px;
  background: #ffdcd5;
  border: 2px dashed #d8654f;
  border-radius: 10px;
  overflow: hidden;
}
.multiselect,
.add-edit-input .eb-form .form-control {
  border: 1.4px solid #f36f56 !important;
  border-radius: 4px !important;
}
.leaflet-control-zoom,
.geocoder-control {
  display: none;
}
.progress {
  background-color: #ffdcd5;
}
.file-label {
  display: inline-block;
  background-color: indigo;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
}
</style>
