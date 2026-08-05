<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CloudArrowDownSvelte from '../../../lib/20/solid/cloud-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CloudArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="CloudArrowDown" />
