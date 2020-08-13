<template>
	<view>
	 <selectdown @refresh="test">
		 {{num}}
	 </selectdown>
	</view>
</template>
 
<script>
//如果你想直接拿来用，把create干掉
// import { create } from '../../utils'
//create()干掉
export default ({
  name: 'pull-refresh',
  data () {
    return {
    num:0
    }
  },
  methods: {
    test(e){
		this.num++
		e()
	}
  },

})	
</script>
<!-- css我就不讲了，你肯定比我厉害 -->
<style scoped lang="scss">
 
</style>