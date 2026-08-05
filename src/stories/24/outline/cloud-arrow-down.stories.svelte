<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CloudArrowDownSvelte from '../../../lib/24/outline/cloud-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CloudArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="CloudArrowDown" />
