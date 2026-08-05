<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EqualsSvelte from '../../../lib/24/solid/equals.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: EqualsSvelte,
		args: { class: '' },
	})
</script>

<Story name="Equals" />
