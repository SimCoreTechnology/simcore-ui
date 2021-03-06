<template>
  <section class="session-listing">
    <header>
      <AutoFinder
        :options="scenariosByDepartment"
        :selectedItem="sessionScenario || {}"
        :canRemove="true"
        :isFocused="false"
        placeholder="Type to search scenarios"
        @select="updateScenario(...arguments)"
        @clear="updateScenario(null)"
        @remove="updateScenario(null)"
      />
      <IconText
        v-if="canRemove"
        class="remove"
        @click.native="$emit('remove')"
        icon="fa-trash" icon-type="fa"
      />
    </header>
    <main>
      <ul>
        <li v-for="(section, index) in sections">
          <fieldset>
            <h5>{{section.label}}</h5>
            <AutoFinderList
              :selectedItems="session[section.key]"
              :options="lookups[section.key]"
              @setSelectedList="update(section.key, ...arguments)"
            >
              <AutoFinder
                slot-scope="slotProps"
                placeholder="Type to search"
                sortOrder="index"
                :options="slotProps.availableItems"
                :selectedItem="slotProps.item"
                :canRemove="slotProps.selectedItems.length > 1"
                :isFocused="slotProps.index === slotProps.selectedItems.length - 1"
                @select="slotProps.select(slotProps.index, ...arguments)"
                @clear="slotProps.clear(slotProps.index)"
                @remove="slotProps.remove(slotProps.index)"
                @next="slotProps.next(slotProps.index)"
              />
            </AutoFinderList>
          </fieldset>
        </li>
      </ul>
    </main>
  </section>
</template>

<script>
import IconText from './IconText'
import AutoFinderList from './AutofinderList'
import AutoFinder from './Autofinder'

import { deepClone } from '../utilities/deep-clone'
import { filter } from 'lodash'
import { assign, find } from 'lodash/fp'

export default {
  components: {
    IconText,
    AutoFinder,
    AutoFinderList,
  },
  props: {
    session: Object,
    canRemove: Boolean,
    lookups: Object,
    bookings: Object,
    event: Object,
  },
  watch: {
    eventTimes() {
    },
  },
  computed: {
    sections() {
      return [{
        label: 'Rooms',
        key: 'rooms',
      }, {
        label: 'Instructors',
        key: 'instructors',
      }, {
        label: 'Learners',
        key: 'learners',
      }]
    },
    eventTimes() {
      return this.splitTimes(this.event.startTime, this.event.duration)
    },
    scenariosByDepartment() {
      return this.event.department.id > 0
        ? filter(this.lookups.scenarios, { department_id: this.event.department.id })
        : this.lookups.scenarios
    },
    sessionScenario() {
      return find({id: this.session.scenarioId})(this.lookups.scenarios)
    },
  },
  methods: {
    update(property, value){
      const session = deepClone(this.session)
      session[property] = value
      this.$emit('update', session)
    },
    updateScenario(value){
      const session = deepClone(this.session)
      session.scenarioId = value.id
      this.$emit('update', session)
    },
    splitTimes(startTime, duration) {
      const times = []
      for (let i = 0; i <= duration; i += 0.5) {
        times.push(startTime + i)
      }
      return times
    },
  },
}
</script>

<style lang="scss">
.session-listing {
  width: 100%;
  background-color: #222;
  header {
    background-color: #666;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    .remove > span {
      color: hsl(0, 100%, 100%);
      cursor: pointer;
    }
  }
  main {
    > ul {
      > li, fieldset {
        padding: 0;
      }
    }
    h5 {
      margin-bottom: 0;
    }
  }
  img {
    fill: white;
  }
}
</style>
