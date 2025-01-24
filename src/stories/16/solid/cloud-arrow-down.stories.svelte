<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CloudArrowDownSvelte from '../../../lib/16/solid/cloud-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CloudArrowDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CloudArrowDown" />
