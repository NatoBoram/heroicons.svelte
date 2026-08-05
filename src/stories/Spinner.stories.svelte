<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Spinner from '../lib/Spinner.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons',
		component: Spinner,
		args: { class: '' },
	})
</script>

<Story name="Spinner" />
