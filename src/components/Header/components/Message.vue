<template>
  <el-popover placement="bottom" :width="300" trigger="click">
    <el-tabs v-model="tabActiveName" @tab-click="handleClick" stretch>
      <el-tab-pane name="notice">
        <template #label> 通知({{ noticeList.length }}) </template>
        <el-scrollbar height="260px">
          <div class="notice-container" v-for="noticeItem in noticeList" :key="noticeItem.id">
            <div class="icon">
              <img :src="noticeItem.icon" alt="" />
            </div>
            <div class="content">
              <div class="title">{{ noticeItem.title }}</div>
              <div class="time">{{ noticeItem.time }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="消息" name="messages">
        <template #label> 消息({{ messageList.length }}) </template>
        <el-scrollbar height="260px">
          <div class="message-container" v-for="MessageItem in messageList" :key="MessageItem.id">
            <div class="avatar">
              <img :src="MessageItem.avatar" alt="" />
            </div>
            <div class="content">
              <div class="title">{{ MessageItem.username }} {{ MessageItem.type }}了你</div>
              <div class="text">{{ MessageItem.content }}</div>
              <div class="time">{{ MessageItem.time }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="代办" name="todo">
        <template #label> 代办({{ todoList.length }}) </template>
        <el-scrollbar height="260px">
          <div class="todo-container" v-for="todoItem in todoList" :key="todoItem.id">
            <div class="content">
              <div class="title">{{ todoItem.title }}</div>
              <div class="status">
                <el-tag :type="getTagType(todoItem.status)">{{ todoItem.status }}</el-tag>
              </div>
            </div>
            <div class="text">{{ todoItem.description }}</div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
    <template #reference>
      <div class="message">
        <div class="red-dot" v-show="hasMessage"></div>
        <el-icon :size="20"><Message /></el-icon>
      </div>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { getMessageList } from "@/api/index";
import { ref, onMounted, computed } from "vue";
import type { TabsPaneContext } from "element-plus";

interface NoticeListItem {
  id: number;
  icon: string;
  title: string;
  time: string;
}

interface MessageListItem {
  id: number;
  avatar: string;
  username: string;
  type: string;
  content: string;
  time: string;
}

interface TodoListItem {
  id: number;
  title: string;
  description: string;
  status: string;
}

const noticeList = ref<NoticeListItem[]>([]);
const messageList = ref<MessageListItem[]>([]);
const todoList = ref<TodoListItem[]>([]);

const hasMessage = computed(() => {
  return noticeList.value.length > 0 || messageList.value.length > 0 || todoList.value.length > 0;
});

const fetchData = async () => {
  try {
    const result = await getMessageList();
    // console.log("result: ", result);
    noticeList.value = result.noticeList;
    messageList.value = result.messageList;
    todoList.value = result.todoList;
  } catch (error) {
    console.log("error: ", error);
  }
};

const getTagType = (status: string) => {
  switch (status) {
    case "未开始":
      return "info";
    case "进行中":
      return "primary";
    case "即将截止":
      return "warning";
    case "已逾期":
      return "danger";
    default:
      return "info";
  }
};

const tabActiveName = ref("notice");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.notice-container {
  display: flex;
  margin-bottom: 8px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border-radius: 50%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 48px;
    margin-left: 8px;

    .title {
      margin-bottom: 6px;
      font-size: 18px;
    }

    .time {
      font-size: 10px;
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.message-container {
  display: flex;
  margin-bottom: 8px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

  .avatar {
    margin-top: 4px;

    img {
      border-radius: 50%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    .title {
      margin-bottom: 6px;
      font-size: 18px;
    }

    .text {
      font-size: 14px;
    }

    .time {
      font-size: 10px;
    }
  }
}

.todo-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

  .content {
    display: flex;
    justify-content: space-between;
    margin-left: 8px;

    .title {
      font-size: 18px;
    }
  }

  .text {
    padding: 0 10px;
    margin-top: 6px;
    margin-bottom: 6px;
    font-size: 12px;
  }
}

.message {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--header-button-active);
    border-bottom: 1px solid #eee;
  }

  .red-dot {
    position: absolute;
    top: 14px;
    right: 8px;
    z-index: 99;
    width: 8px;
    height: 8px;
    background-color: red;
    border-radius: 50%;
  }
}
</style>
