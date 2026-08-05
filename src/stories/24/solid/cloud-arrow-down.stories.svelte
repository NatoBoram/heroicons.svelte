<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CloudArrowDownSvelte from '../../../lib/24/solid/cloud-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CloudArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="CloudArrowDown" />
