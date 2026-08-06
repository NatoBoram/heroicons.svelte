<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CloudArrowUpSvelte from '../../../lib/20/solid/cloud-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CloudArrowUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="CloudArrowUp" />
