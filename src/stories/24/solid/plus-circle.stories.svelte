<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusCircleSvelte from '../../../lib/24/solid/plus-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PlusCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="PlusCircle" />
