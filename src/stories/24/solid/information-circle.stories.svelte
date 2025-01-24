<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InformationCircleSvelte from '../../../lib/24/solid/information-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: InformationCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="InformationCircle" />
