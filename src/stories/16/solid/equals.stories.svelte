<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EqualsSvelte from '../../../lib/16/solid/equals.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: EqualsSvelte,
		args: { class: '' },
	})
</script>

<Story name="Equals" />
