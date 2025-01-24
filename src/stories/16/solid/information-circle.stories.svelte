<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InformationCircleSvelte from '../../../lib/16/solid/information-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: InformationCircleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="InformationCircle" />
