<template>
  <div class="todo-main">
    <div class="container">
      <div class="card" style="margin-botton: 10px">
        <div class="card-header">
          <h3>TODO APPLICATION</h3>
          <h4>Count on list: {{ count }}</h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col">
              <b-form-input
                placeholder="Input To Do"
                v-model="newTask"
                @keyup.enter="handleAddNewTask()"
              ></b-form-input>
            </div>
          </div>
          <div class="row">
            <div class="col" cols="4" cols-sm="4" cols-md="4" cols-lg="3">
              <b-button
                style="background-color: green; border: none; margin-top: 20px"
                @click="handleAddNewTask()"
                >Add</b-button
              >
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <div class="row" v-for="(task, index) in toDoList" :key="index">
            <div class="col-10">
              <input
                class="input-zone"
                type="text"
                v-model="task.title"
                spellcheck="false"
                style="width: 100%"
                disabled
              />
            </div>
            <div class="col-2">
              <b-button
                style="background-color: red; border: none"
                @click="handleAddNewTask()"
                >X</b-button
              >
            </div>
          </div>
        </div>
        <!-- <b-table
                striped
                hover
                sticky-header
                :items="toDoList"
                :fields="fieldToDoList"
              >
                <template #empty="">
                  <span>No data</span>
                </template>
            </b-table> -->
      </div>
    </div>
  </div>
</template>

<script>
import { MakeToast } from "../../utils/MakeToast";
import { IsEmptyOrWhiteSpace } from "../../utils/validation";
export default {
  name: "ToDoInput",
  computed: {
    isListTaskChange() {
      return this.$store.getters.listTask;
    },
    fieldToDoList() {
      return [
        {
          key: "List",
          sortable: true,
        },
      ];
    },
  },
  watch: {
    isListTaskChange() {
      this.toDoList = this.$store.getters.listTask;
      this.count = this.$store.getters.listTask.length;
    },
  },
  data() {
    let lengthListTask = this.$store.getters.listTask.length;
    return {
      toDoList: [],
      newTask: "",
      count: lengthListTask,
    };
  },
  created() {
    this.toDoList = this.$store.getters.listTask;
  },
  methods: {
    handleAddNewTask() {
      let title = this.handle2String(this.newTask);
      if (!IsEmptyOrWhiteSpace(title)) {
        let newTask = {
          title: title,
        };
        MakeToast({
          variant: "success",
          title: "Warning",
          content: "Nhap vao ddmm",
        });
        this.$store.dispatch("app/setNewTask", newTask);
        console.log(this.toDoList);
      } else {
        MakeToast({
          variant: "warning",
          title: "Warning",
          content: "Nhap vao ddmm",
        });
      }
    },
    handle2String(val) {
      return val + "";
    },
  },
};
</script>

<style lang="scss" scoped>
.input-zone {
  padding: 5px 0.75rem;
}
</style>
