<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CloudSvelte from '../../../lib/16/solid/cloud.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CloudSvelte,
		args: { class: '' },
	})
</script>

<Story name="Cloud" />
