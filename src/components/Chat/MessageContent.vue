<template>
  <div>
    <p v-if="!isSame"
       v-html="message.author"
       class="is-size-6 is-fullwidth name has-text-grey-dark">
    </p>
    <div v-html="message.text"
         class="notification messageContainer"
         :class="{ 'is-info': isUser }">
    </div>
  </div>
</template>

<script>
export default {
  props: ['message', 'isUser', 'isSame']
}
</script>
