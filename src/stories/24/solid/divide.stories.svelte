<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DivideSvelte from '../../../lib/24/solid/divide.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DivideSvelte,
		args: { class: '' },
	})
</script>

<Story name="Divide" />
