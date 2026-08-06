<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CloudArrowUpSvelte from '../../../lib/16/solid/cloud-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CloudArrowUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="CloudArrowUp" />
